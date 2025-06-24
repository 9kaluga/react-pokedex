import React from 'react';

import { Button } from '../../buttons/Button/Button';

import type { ModalProps } from '../Modal/Modal';
import { Modal } from '../Modal/Modal';

interface UploadPhotoModalProps extends Omit<ModalProps, 'children' | 'loading'> {
  uid: User['uid'];
}

export const UploadPhotoModal: React.FC<UploadPhotoModalProps> = ({ onClose, uid, ...props }) => {
  const [loading, setLoading] = React.useState(false);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const onFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setLoading(true);
    onClose();
    setLoading(false);
  };

  return (
    <Modal {...props} onClose={onClose}>
      <label htmlFor='upload-button'>
        <input
          type='file'
          id='upload-button'
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={onFileInputChange}
        />
        <Button variant='text' onClick={() => !loading && fileInputRef.current?.click()}>
          {!loading ? 'Upload your photo' : 'Loading%'}
        </Button>
      </label>
      <Button onClick={onClose} loading={loading}>
        CANCEL
      </Button>
    </Modal>
  );
};
