import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { Form, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';
import NoteEditor from '../../../components/notes/note/NoteEditor';
import { post } from '../../../utils/api';

const CreateFolder = () => {
  const [viewDescription, setViewDescription] = useState(false);
  const [description, setDescription] = useState('');
  const navigation = useNavigation();
  const actionData = useActionData();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="mb-4">
      <h1 className="text-2xl font-semibold mb-4">Create Folder</h1>
      <Form method="post" className="max-w-[600px]">
        <div className="mb-4">
          <label htmlFor="folderName" className="block mb-2">
            Folder Name
          </label>
          <Input
            id="folderName"
            name="folderName"
            required
            className="w-full"
            disabled={isSubmitting}
            placeholder="Folder name is email address"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">
            Description
          </label>
          <Input hidden id="description" name="description" value={description} />
          <div className="border border-gray-200 rounded-md p-2 mt-2">
            <NoteEditor onChangeContent={setDescription} />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="default" onClick={() => setViewDescription(!viewDescription)}>
            {viewDescription ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            {viewDescription ? 'Hide' : 'View'} Description
          </Button>
          <Button type="primary" htmlType="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
          <Button type="dashed" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>

        {viewDescription && (
          <div
            className="rich-text mt-2 border border-gray-200 rounded-md p-2 max-h-[30vh] overflow-auto"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </Form>
      {actionData && actionData.error && <p className="text-red-500 mt-4">{actionData.error}</p>}
    </div>
  );
};

export default CreateFolder;

export async function createFolderAction({ request }) {
  const formData = await request.formData();
  const folderName = formData.get('folderName');
  const description = formData.get('description');

  // Validate folderName is a valid email address format
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(folderName)) {
    return { error: 'Folder name must be a valid email address.' };
  }

  try {
    await post('/folders', { name: folderName, description });
    return redirect('/folders');
  } catch (error) {
    return { error: 'Failed to create user. Please try again.' };
  }
}
