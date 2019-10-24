package cn.net.bluechips.bcapp;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.os.Bundle;  //react-native-splash-screen add
import org.devio.rn.splashscreen.SplashScreen;//react-native-splash-screen  add

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "bcapp";
    }
    
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
     /**
      * 设置启动页
      */
  /*    @Override
     protected void onCreate(Bundle savedInstanceState) {
         SplashScreen.show(this);  // 展示启动页设置代码
         super.onCreate(savedInstanceState);
     } */

}
