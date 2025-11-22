export interface BluetoothSerialDevice {
  name: string | null;
  address: string;
  id: string;
  class: number;
}

export interface ListResult {
  devices: BluetoothSerialDevice[];
}

export interface ConnectResult {
  connected: boolean;
}

export interface DisconnectResult {
  disconnected: boolean;
}

export interface WriteResult {
  written: boolean;
}

export interface IsEnabledResult {
  enabled: boolean;
}

export interface IsConnectedResult {
  connected: boolean;
}

export interface DisconnectIfNeededResult {
  disconnected: boolean;
}

export interface PermissionResult {
  granted: boolean;
}

export interface OpenSettingsResult {
  opened: boolean;
}


export interface BluetoothSerialPlugin {
  hasBluetoothPermission(): Promise<PermissionResult>;
  requestBluetoothPermission(): Promise<PermissionResult>;
  openBluetoothSettings(): Promise<OpenSettingsResult>;

  isEnabled(): Promise<IsEnabledResult>;
  isConnected(): Promise<IsConnectedResult>;
  disconnectIfNeeded(): Promise<DisconnectIfNeededResult>;
  
  list(): Promise<ListResult>;
  connect(options: { mac: string }): Promise<ConnectResult>;
  disconnect(): Promise<DisconnectResult>;
  write(options: { data: string }): Promise<WriteResult>;
}
