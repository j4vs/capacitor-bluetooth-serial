/**
 * Represents a Bluetooth serial device.
 * @interface BluetoothSerialDevice
 * @property {string | null} name - The name of the Bluetooth device, or null if unavailable.
 * @property {string} address - The MAC address of the Bluetooth device.
 * @property {string} id - The unique identifier of the Bluetooth device.
 * @property {number} class - The class of the Bluetooth device (device type classification).
 */
export interface BluetoothSerialDevice {
  name: string | null;
  address: string;
  id: string;
  class: number;
}

/**
 * Represents the result of listing available Bluetooth serial devices.
 * @interface ListResult
 * @property {BluetoothSerialDevice[]} devices - An array of available Bluetooth serial devices.
 */
export interface ListResult {
  devices: BluetoothSerialDevice[];
}

/**
 * Result returned from a Bluetooth serial connection attempt.
 *
 * Contains a single flag that indicates whether a serial connection to the
 * remote device was successfully established.
 *
 * @property connected - True if the connection was established; false otherwise.
 */
export interface ConnectResult {
  connected: boolean;
}

/**
 * Represents the result of a Bluetooth disconnection operation.
 * @interface DisconnectResult
 * @property {boolean} disconnected - Indicates whether the device was successfully disconnected.
 */
export interface DisconnectResult {
  disconnected: boolean;
}

/**
 * Represents the result of a write operation.
 * @interface WriteResult
 * @property {boolean} written - Indicates whether the data was successfully written.
 */
export interface WriteResult {
  written: boolean;
}

/**
 * Result object indicating whether Bluetooth is enabled on the device.
 * @interface IsEnabledResult
 * @property {boolean} enabled - True if Bluetooth is currently enabled, false otherwise.
 */
export interface IsEnabledResult {
  enabled: boolean;
}

/**
 * Result interface for checking Bluetooth serial connection status.
 * @interface IsConnectedResult
 * @property {boolean} connected - Indicates whether the Bluetooth serial device is currently connected.
 */
export interface IsConnectedResult {
  connected: boolean;
}

/**
 * Result returned when disconnecting from a Bluetooth serial device if needed.
 * @interface DisconnectIfNeededResult
 * @property {boolean} disconnected - Indicates whether the device was successfully disconnected.
 */
export interface DisconnectIfNeededResult {
  disconnected: boolean;
}

/**
 * Represents the result of a permission request.
 * @interface PermissionResult
 * @property {boolean} granted - Indicates whether the permission was granted (true) or denied (false).
 */
export interface PermissionResult {
  granted: boolean;
}

/**
 * Result returned after attempting to open the device's Bluetooth settings.
 *
 * The `opened` property is true when the settings screen was successfully launched;
 * otherwise it is false (for example, if the operation failed or was blocked).
 */
export interface OpenSettingsResult {
  opened: boolean;
}


/**
 * Represents the Bluetooth Serial plugin interface for Capacitor.
 * Provides methods for managing Bluetooth permissions, connectivity, and serial communication.
 */
export interface BluetoothSerialPlugin {
  /**
   * Checks if the application has Bluetooth permission.
   * @returns A promise that resolves to the permission status.
   */
  hasBluetoothPermission(): Promise<PermissionResult>;

  /**
   * Requests Bluetooth permission from the user.
   * @returns A promise that resolves to the permission status after the request.
   */
  requestBluetoothPermission(): Promise<PermissionResult>;

  /**
   * Opens the device Bluetooth settings.
   * @returns A promise that resolves with the result of opening settings.
   */
  openBluetoothSettings(): Promise<OpenSettingsResult>;

  /**
   * Checks if Bluetooth is enabled on the device.
   * @returns A promise that resolves to the Bluetooth enabled status.
   */
  isEnabled(): Promise<IsEnabledResult>;

  /**
   * Checks if a Bluetooth device is currently connected.
   * @returns A promise that resolves to the connection status.
   */
  isConnected(): Promise<IsConnectedResult>;

  /**
   * Disconnects from the Bluetooth device if currently connected.
   * @returns A promise that resolves with the disconnection result.
   */
  disconnectIfNeeded(): Promise<DisconnectIfNeededResult>;

  /**
   * Lists all available paired Bluetooth devices.
   * @returns A promise that resolves to a list of available devices.
   */
  list(): Promise<ListResult>;

  /**
   * Connects to a Bluetooth device with the specified MAC address.
   * @param options - The connection options containing the MAC address.
   * @param options.mac - The MAC address of the device to connect to.
   * @returns A promise that resolves with the connection result.
   */
  connect(options: { mac: string }): Promise<ConnectResult>;

  /**
   * Disconnects from the currently connected Bluetooth device.
   * @returns A promise that resolves with the disconnection result.
   */
  disconnect(): Promise<DisconnectResult>;

  /**
   * Writes data to the connected Bluetooth device.
   * @param options - The write options containing the data to send.
   * @param options.data - The data string to write to the device.
   * @returns A promise that resolves with the write operation result.
   */
  write(options: { data: string }): Promise<WriteResult>;
}
