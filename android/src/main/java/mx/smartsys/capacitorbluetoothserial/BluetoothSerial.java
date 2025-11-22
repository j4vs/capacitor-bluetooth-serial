package mx.smartsys.capacitorbluetoothserial;

import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothSocket;


import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;

import java.io.OutputStream;
import java.util.UUID;


public class BluetoothSerial {

    private BluetoothAdapter adapter = BluetoothAdapter.getDefaultAdapter();
    private BluetoothSocket socket = null;
    private OutputStream outputStream = null;

    public boolean isEnabled() {
        if (adapter == null) return false;
        return adapter.isEnabled();
    }

    public boolean isConnected() {
        return socket != null && socket.isConnected();
    }

    public boolean disconnectIfNeeded() {
        if (socket == null) return false;
        return disconnect();
    }




    public JSObject list() {
        JSArray arr = new JSArray();

        if (adapter == null) {
            JSObject res = new JSObject();
            res.put("devices", arr);
            return res;
        }

        for (BluetoothDevice dev : adapter.getBondedDevices()) {
            JSObject d = new JSObject();
            d.put("name", dev.getName());
            d.put("address", dev.getAddress());
            d.put("id", dev.getAddress());
            d.put("class", dev.getBluetoothClass() != null ? dev.getBluetoothClass().getDeviceClass() : 0);

            arr.put(d);
        }

        JSObject res = new JSObject();
        res.put("devices", arr);
        return res;
    }

    public boolean connect(String mac) {
        try {
            BluetoothDevice device = adapter.getRemoteDevice(mac);

            // Cerrar cualquier conexión previa
            if (socket != null) {
                try { socket.close(); } catch (Exception ignored) {}
                socket = null;
            }

            // UUID clásico para SPP (Serial Port Profile)
            UUID SPP_UUID = UUID.fromString("00001101-0000-1000-8000-00805F9B34FB");

            socket = device.createRfcommSocketToServiceRecord(SPP_UUID);

            adapter.cancelDiscovery();

            socket.connect();

            outputStream = socket.getOutputStream();

            return true;

        } catch (Exception e) {
            Logger.error("BT connect error: ", e);
            try { if (socket != null) socket.close(); } catch (Exception ignored) {}
            socket = null;
            outputStream = null;
            return false;
        }
    }

    public boolean disconnect() {
        try {
            if (outputStream != null) {
                try { outputStream.flush(); } catch (Exception ignored) {}
                try { outputStream.close(); } catch (Exception ignored) {}
            }
            if (socket != null) {
                try { socket.close(); } catch (Exception ignored) {}
            }

            outputStream = null;
            socket = null;

            return true;

        } catch (Exception e) {
            Logger.error("BT disconnect error: ", e);
            return false;
        }
    }

    public boolean write(byte[] data) {
        try {
            if (outputStream == null) {
                Logger.warn("BT write: outputStream is null (not connected)");
                return false;
            }

            outputStream.write(data);
            outputStream.flush();

            return true;

        } catch (Exception e) {
            Logger.error("BT write error: ", e);
            return false;
        }
    }


}
