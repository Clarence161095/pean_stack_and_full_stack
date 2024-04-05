import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './folder.reducer';

export const FolderDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const folderEntity = useAppSelector(state => state.folder.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="folderDetailsHeading">
          <Translate contentKey="noteApp.folder.detail.title">Folder</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{folderEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="noteApp.folder.name">Name</Translate>
            </span>
          </dt>
          <dd>{folderEntity.name}</dd>
          <dt>
            <Translate contentKey="noteApp.folder.user">User</Translate>
          </dt>
          <dd>{folderEntity.user ? folderEntity.user.login : ''}</dd>
          <dt>
            <Translate contentKey="noteApp.folder.subFolder">Sub Folder</Translate>
          </dt>
          <dd>{folderEntity.subFolder ? folderEntity.subFolder.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/folder" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/folder/${folderEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default FolderDetail;
