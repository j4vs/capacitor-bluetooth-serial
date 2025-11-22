import { WebPlugin } from '@capacitor/core';

import type { BluetoothSerialPlugin, ConnectResult, DisconnectIfNeededResult, DisconnectResult, IsConnectedResult, IsEnabledResult, ListResult, OpenSettingsResult, PermissionResult, WriteResult } from './definitions';

export class BluetoothSerialWeb extends WebPlugin implements BluetoothSerialPlugin {
  async hasBluetoothPermission(): Promise<PermissionResult> {
    console.warn('BluetoothSerial: hasBluetoothPermission() is not supported on web');
    return { granted: false };
  }

  async requestBluetoothPermission(): Promise<PermissionResult> {
    console.warn('BluetoothSerial: requestBluetoothPermission() is not supported on web');
    return { granted: false };
  }

  async openBluetoothSettings(): Promise<OpenSettingsResult> {
    console.warn('BluetoothSerial: openBluetoothSettings() is not supported on web');
    return { opened: false };
  }



  async isEnabled(): Promise<IsEnabledResult> {
    console.warn('BluetoothSerial: isEnabled() is not supported on web');
    return { enabled: false };
  }

  async isConnected(): Promise<IsConnectedResult> {
    console.warn('BluetoothSerial: isConnected() is not supported on web');
    return { connected: false };
  }

  async disconnectIfNeeded(): Promise<DisconnectIfNeededResult> {
    console.warn('BluetoothSerial: disconnectIfNeeded() is not supported on web');
    return { disconnected: true };
  }



  async list(): Promise<ListResult> {
    console.warn('BluetoothSerial: list() is not supported on web');
    return { devices: [] };
  }

  async connect(): Promise<ConnectResult> {
    console.warn('BluetoothSerial: connect() is not supported on web');
    return { connected: false };
  }

  async disconnect(): Promise<DisconnectResult> {
    console.warn('BluetoothSerial: disconnect() is not supported on web');
    return { disconnected: true };
  }

  async write(): Promise<WriteResult> {
    console.warn('BluetoothSerial: write() is not supported on web');
    return { written: false };
  }
}
