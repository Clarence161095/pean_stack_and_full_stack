import { Button, Input } from 'antd';
import { Form, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';
import LazyLoading from '../../../components/LazyLoading';
import { put } from '../../../utils/api';

const UpdateFolder = () => {
  const navigation = useNavigation();
  const actionData = useActionData();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="mb-4">
      <h1 className="text-2xl font-semibold mb-4">Edit Folder </h1>
      <LazyLoading>
        {(folder) => {
          if (!folder) {
            return <div className="flex justify-center items-center h-full">Don&apos;t have any folder</div>;
          }
          return (
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
                  defaultValue={folder.name}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block mb-2">
                  Description
                </label>
                <Input.TextArea
                  id="description"
                  name="description"
                  required
                  className="w-full"
                  disabled={isSubmitting}
                  defaultValue={folder.description}
                />
              </div>

              {actionData && actionData.error && <p className="text-red-500 mt-4">{actionData.error}</p>}

              <div>
                <input type="hidden" name="originalFolder" value={JSON.stringify(folder)} />
              </div>

              <div className="flex justify-end">
                <div className="flex gap-2">
                  <Button onClick={() => navigate('/notes')} type="default">
                    Cancel
                  </Button>
                  <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>
              </div>
            </Form>
          );
        }}
      </LazyLoading>
    </div>
  );
};

export default UpdateFolder;

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const originalFolder = JSON.parse(formData.get('originalFolder'));
  const folderName = formData.get('folderName');
  const description = formData.get('description');

  // Validate folderName and description are not empty
  if (folderName === originalFolder.name && description === originalFolder.description) {
    return { error: 'No changes detected' };
  }

  try {
    await put(`/folders/${params.folderId}`, { name: folderName, description });
    return redirect('/notes');
  } catch (error) {
    return { error: 'Failed to update folder. Please try again.' };
  }
};
