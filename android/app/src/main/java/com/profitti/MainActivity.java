package com.profitti;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import net.hockeyapp.android.CrashManager;
import net.hockeyapp.android.metrics.MetricsManager;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Profitti";
    }

    private void checkForCrashes() {
        CrashManager.register(this);
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        MetricsManager.register(this, getApplication());
    }

    @Override
    public void onResume() {
        super.onResume();
        checkForCrashes();
    }
}
