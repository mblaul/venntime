import React from 'react';
import { IonLoading } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core';

interface LoadingProps {
  isOpen?: boolean;
  onDidDismiss?: (event: CustomEvent<OverlayEventDetail>) => void;
  message?: string;
}

interface DefaultLoadingProps {
  isOpen: boolean;
  onDidDismiss: (event: CustomEvent<OverlayEventDetail>) => void;
  message: string;
}

const defaultProps: DefaultLoadingProps = {
  isOpen: false,
  onDidDismiss: () => {},
  message: 'Loading...',
};

const Loading: React.FC<LoadingProps> = props => {
  const loadingProps: DefaultLoadingProps = { ...defaultProps, ...props };
  return (
    <IonLoading isOpen={loadingProps.isOpen} onDidDismiss={loadingProps.onDidDismiss} message={loadingProps.message} />
  );
};

export default Loading;
