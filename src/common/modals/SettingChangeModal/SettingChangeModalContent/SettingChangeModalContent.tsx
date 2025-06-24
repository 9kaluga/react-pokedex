import React from 'react';
import { ModalProps } from '../../../../common/modals/Modal/Modal';

import styles from './SettingChangeModalContent.module.css';

export type SettingModalItem = {
  type: keyof Pick<User, 'city' | 'displayName' | 'phoneNumber'>;
  value: string;
};
interface SettingChangeModalContentProps extends Pick<ModalProps, 'onClose'> {
  setting: SettingModalItem;
}

export const SettingChangeModalContent: React.FC<SettingChangeModalContentProps> = ({
  setting,
  onClose
}) => {
  return <div className={styles.setting_modal}>{setting.type}</div>;
};
