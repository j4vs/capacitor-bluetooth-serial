package mx.smartsys.capacitorbluetoothserial;

import com.getcapacitor.Logger;

public class BluetoothSerial {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
