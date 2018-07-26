define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Button0f7f81d401c2c4d **/
    AS_Button_b40b74ecb6b245e7a908280d4bd413a9: function AS_Button_b40b74ecb6b245e7a908280d4bd413a9(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormLogOut");
        ntf.navigate();
    },
    /** onDone defined for TextArea0g8c4581680c241 **/
    AS_TextArea_d3e343d9405a4eff8aa69e28332a62b3: function AS_TextArea_d3e343d9405a4eff8aa69e28332a62b3(eventobject) {
        var self = this;

        function ____cdea55f62e4a4b04a795ff2b1e4bfc6b_Callback() {}
        function ____c1dce31eaf014ffc8bb56c10419f7ada_Callback() {}
        if ((self.view.TextArea0g8c4581680c241.text == 'some_mail@gmail.com')) {
            self.view.CopyLabel0c62b34aa333741.text = "email not 'some_mail@gmail.com'";
            self.view.TextArea0g8c4581680c241.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "ff000000",
                    "opacity": 0.35
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.4
            }, {
                "animationEnd": ____c1dce31eaf014ffc8bb56c10419f7ada_Callback
            });
            self.view.CopyFlexContainerErrCustom0i801c4f174a14a.isVisible = true;
        } else {
            self.view.TextArea0g8c4581680c241.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "ff000000",
                    "opacity": 0.35
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.4
            }, {
                "animationEnd": ____cdea55f62e4a4b04a795ff2b1e4bfc6b_Callback
            });
        }
    },
    /** onDone defined for CopyTextArea0g16416c8be3c46 **/
    AS_TextArea_g273b10d830a4d5ba13baf919d0ad734: function AS_TextArea_g273b10d830a4d5ba13baf919d0ad734(eventobject) {
        var self = this;

        function ____fe687f2d38094f068a0f5955514837c1_Callback() {}
        function ____a4e12c38b75141f7a0c9e9a0c4f0ad07_Callback() {}
        if ((self.view.CopyTextArea0g16416c8be3c46.text == 111111)) {
            self.view.CopyLabel0c62b34aa333741.text = "not '111111' password";
            self.view.CopyLabel0c62b34aa333741.isVisible = true;
            self.view.CopyTextArea0g16416c8be3c46.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "ff000000",
                    "opacity": 0.3
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.4
            }, {
                "animationEnd": ____a4e12c38b75141f7a0c9e9a0c4f0ad07_Callback
            });
        } else {
            self.view.CopyTextArea0g16416c8be3c46.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "07e00000",
                    "opacity": 0.3
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.4
            }, {
                "animationEnd": ____fe687f2d38094f068a0f5955514837c1_Callback
            });
        }
    },
    /** onBeginEditing defined for TextArea0g8c4581680c241 **/
    AS_TextArea_e1421d484c6b4d8b87d8c24a269d268e: function AS_TextArea_e1421d484c6b4d8b87d8c24a269d268e(eventobject) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "13%";
    },
    /** onEndEditing defined for TextArea0g8c4581680c241 **/
    AS_TextArea_g0a3ace608cd42e7887250e74bd33e7f: function AS_TextArea_g0a3ace608cd42e7887250e74bd33e7f(eventobject) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "25%";
    },
    /** onBeginEditing defined for CopyTextArea0g16416c8be3c46 **/
    AS_TextArea_ga0a957dc2014774a8025976c9d12cc5: function AS_TextArea_ga0a957dc2014774a8025976c9d12cc5(eventobject) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "13%";
    },
    /** onEndEditing defined for CopyTextArea0g16416c8be3c46 **/
    AS_TextArea_c63f18b254b3454f928d5b002e1198b2: function AS_TextArea_c63f18b254b3454f928d5b002e1198b2(eventobject) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "25%";
    },
    /** onBeginEditing defined for CopyTextArea0g16416c8be3c46 **/
    AS_TextArea_i4bbeee078ed40b3aa7b022569a2ef46: function AS_TextArea_i4bbeee078ed40b3aa7b022569a2ef46(eventobject) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "13%";
    },
    /** onEndEditing defined for CopyTextArea0g16416c8be3c46 **/
    AS_TextArea_h1b1d2c9df6942458d62d0a6a21170b7: function AS_TextArea_h1b1d2c9df6942458d62d0a6a21170b7(eventobject) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "25%";
    },
    /** onBeginEditing defined for TextArea0g8c4581680c241 **/
    AS_TextArea_e142db4ca5b54196b83d9261e4705d7c: function AS_TextArea_e142db4ca5b54196b83d9261e4705d7c(eventobject) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "13%";
    },
    /** onEndEditing defined for TextArea0g8c4581680c241 **/
    AS_TextArea_b4839ab2c6c3462d8d7345b8148f422c: function AS_TextArea_b4839ab2c6c3462d8d7345b8148f422c(eventobject) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "25%";
    }
});