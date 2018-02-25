package com.zobro2

import android.app.Application
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader
import org.reactnative.camera.RNCameraPackage

class MainApplication : Application(), ReactApplication {

    private val mReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport() = BuildConfig.DEBUG

        override fun getPackages(): List<ReactPackage> =
                mutableListOf<ReactPackage>(
                        MainReactPackage(),
                        ReactNativePushNotificationPackage(),
                        RNCameraPackage()
                )

        override fun getJSMainModuleName() = "index"
    }

    override fun getReactNativeHost() = mReactNativeHost

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, /* native exopackage */ false)
    }
}
