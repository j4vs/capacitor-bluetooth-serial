package mx.smartsys.capacitorbluetoothserial;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.PermissionState;
import android.content.Intent;
import android.provider.Settings;

@CapacitorPlugin(
  name = "BluetoothSerial",
  permissions = {
      @Permission(strings = {
          "android.permission.BLUETOOTH_SCAN",
          "android.permission.BLUETOOTH_CONNECT"
      }, alias = "bluetooth")
  }
)
public class BluetoothSerialPlugin extends Plugin {

    private final BluetoothSerial implementation = new BluetoothSerial();



    @PluginMethod
    public void hasBluetoothPermission(PluginCall call) {
        PermissionState state = getPermissionState("bluetooth");

        JSObject ret = new JSObject();
        ret.put("granted", state == PermissionState.GRANTED);

        call.resolve(ret);
    }

    @PluginMethod
    public void requestBluetoothPermission(PluginCall call) {
        requestPermissionForAlias("bluetooth", call, "permCallback");
    }

    @PluginMethod
    public void permCallback(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("granted", true);
        call.resolve(ret);
    }

    @PluginMethod
    public void openBluetoothSettings(PluginCall call) {
        Intent intent = new Intent(Settings.ACTION_BLUETOOTH_SETTINGS);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getActivity().startActivity(intent);

        JSObject ret = new JSObject();
        ret.put("opened", true);

        call.resolve(ret);
    }



    @PluginMethod
    public void isEnabled(PluginCall call) {
        boolean enabled = implementation.isEnabled();

        JSObject ret = new JSObject();
        ret.put("enabled", enabled);

        call.resolve(ret);
    }

    @PluginMethod
    public void isConnected(PluginCall call) {
        boolean connected = implementation.isConnected();

        JSObject ret = new JSObject();
        ret.put("connected", connected);

        call.resolve(ret);
    }

    @PluginMethod
    public void disconnectIfNeeded(PluginCall call) {
        boolean ok = implementation.disconnectIfNeeded();

        JSObject ret = new JSObject();
        ret.put("disconnected", ok);

        call.resolve(ret);
    }



    @PluginMethod
    public void list(PluginCall call) {
        JSObject ret = implementation.list();
        call.resolve(ret);
    }

    @PluginMethod
    public void connect(PluginCall call) {
        String mac = call.getString("mac");

        if (mac == null || mac.isEmpty()) {
            call.reject("mac is required");
            return;
        }

        boolean ok = implementation.connect(mac);

        JSObject ret = new JSObject();
        ret.put("connected", ok);
        call.resolve(ret);
    }

    @PluginMethod
    public void disconnect(PluginCall call) {
        boolean ok = implementation.disconnect();

        JSObject ret = new JSObject();
        ret.put("disconnected", ok);

        call.resolve(ret);
    }

    @PluginMethod
    public void write(PluginCall call) {
        String base64 = call.getString("data");

        if (base64 == null) {
            call.reject("data (base64 string) required");
            return;
        }

        byte[] bytes;

        try {
            bytes = android.util.Base64.decode(base64, android.util.Base64.DEFAULT);
        } catch (Exception e) {
            call.reject("invalid base64", e);
            return;
        }

        boolean ok = implementation.write(bytes);

        JSObject ret = new JSObject();
        ret.put("written", ok);
        call.resolve(ret);
    }


}
