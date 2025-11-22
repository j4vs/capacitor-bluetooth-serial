# @smartsys/capacitor-bluetooth-serial

Capacitor plugin for Android Bluetooth Serial communication.

## Install

```bash
npm install @smartsys/capacitor-bluetooth-serial
npx cap sync
```

## API

<docgen-index>

* [`hasBluetoothPermission()`](#hasbluetoothpermission)
* [`requestBluetoothPermission()`](#requestbluetoothpermission)
* [`openBluetoothSettings()`](#openbluetoothsettings)
* [`isEnabled()`](#isenabled)
* [`isConnected()`](#isconnected)
* [`disconnectIfNeeded()`](#disconnectifneeded)
* [`list()`](#list)
* [`connect(...)`](#connect)
* [`disconnect()`](#disconnect)
* [`write(...)`](#write)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### hasBluetoothPermission()

```typescript
hasBluetoothPermission() => Promise<PermissionResult>
```

**Returns:** <code>Promise&lt;<a href="#permissionresult">PermissionResult</a>&gt;</code>

--------------------


### requestBluetoothPermission()

```typescript
requestBluetoothPermission() => Promise<PermissionResult>
```

**Returns:** <code>Promise&lt;<a href="#permissionresult">PermissionResult</a>&gt;</code>

--------------------


### openBluetoothSettings()

```typescript
openBluetoothSettings() => Promise<OpenSettingsResult>
```

**Returns:** <code>Promise&lt;<a href="#opensettingsresult">OpenSettingsResult</a>&gt;</code>

--------------------


### isEnabled()

```typescript
isEnabled() => Promise<IsEnabledResult>
```

**Returns:** <code>Promise&lt;<a href="#isenabledresult">IsEnabledResult</a>&gt;</code>

--------------------


### isConnected()

```typescript
isConnected() => Promise<IsConnectedResult>
```

**Returns:** <code>Promise&lt;<a href="#isconnectedresult">IsConnectedResult</a>&gt;</code>

--------------------


### disconnectIfNeeded()

```typescript
disconnectIfNeeded() => Promise<DisconnectIfNeededResult>
```

**Returns:** <code>Promise&lt;<a href="#disconnectifneededresult">DisconnectIfNeededResult</a>&gt;</code>

--------------------


### list()

```typescript
list() => Promise<ListResult>
```

**Returns:** <code>Promise&lt;<a href="#listresult">ListResult</a>&gt;</code>

--------------------


### connect(...)

```typescript
connect(options: { mac: string; }) => Promise<ConnectResult>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ mac: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#connectresult">ConnectResult</a>&gt;</code>

--------------------


### disconnect()

```typescript
disconnect() => Promise<DisconnectResult>
```

**Returns:** <code>Promise&lt;<a href="#disconnectresult">DisconnectResult</a>&gt;</code>

--------------------


### write(...)

```typescript
write(options: { data: string; }) => Promise<WriteResult>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#writeresult">WriteResult</a>&gt;</code>

--------------------


### Interfaces


#### PermissionResult

| Prop          | Type                 |
| ------------- | -------------------- |
| **`granted`** | <code>boolean</code> |


#### OpenSettingsResult

| Prop         | Type                 |
| ------------ | -------------------- |
| **`opened`** | <code>boolean</code> |


#### IsEnabledResult

| Prop          | Type                 |
| ------------- | -------------------- |
| **`enabled`** | <code>boolean</code> |


#### IsConnectedResult

| Prop            | Type                 |
| --------------- | -------------------- |
| **`connected`** | <code>boolean</code> |


#### DisconnectIfNeededResult

| Prop               | Type                 |
| ------------------ | -------------------- |
| **`disconnected`** | <code>boolean</code> |


#### ListResult

| Prop          | Type                                 |
| ------------- | ------------------------------------ |
| **`devices`** | <code>BluetoothSerialDevice[]</code> |


#### BluetoothSerialDevice

| Prop          | Type                        |
| ------------- | --------------------------- |
| **`name`**    | <code>string \| null</code> |
| **`address`** | <code>string</code>         |
| **`id`**      | <code>string</code>         |
| **`class`**   | <code>number</code>         |


#### ConnectResult

| Prop            | Type                 |
| --------------- | -------------------- |
| **`connected`** | <code>boolean</code> |


#### DisconnectResult

| Prop               | Type                 |
| ------------------ | -------------------- |
| **`disconnected`** | <code>boolean</code> |


#### WriteResult

| Prop          | Type                 |
| ------------- | -------------------- |
| **`written`** | <code>boolean</code> |

</docgen-api>
