define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDone defined for TextField0g0e685fdfb9d43 **/
    AS_TextField_j6abf6fe16c14036972cdb2af514207d: function AS_TextField_j6abf6fe16c14036972cdb2af514207d(eventobject, changedtext) {
        var self = this;

        function ____ddd1ac42bc744a379f0c34b84857f484_Callback() {}
        function ____ebb5d2f37c0d4e72a68f95cc0e39bce9_Callback() {}
        if ((self.view.TextField0g0e685fdfb9d43.text == 'login@gmail.com')) {
            self.view.TextField0g0e685fdfb9d43.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "146e0000",
                    "opacity": 0.15
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": ____ebb5d2f37c0d4e72a68f95cc0e39bce9_Callback
            });
            self.view.CopyFlexContainerErrCustom0i801c4f174a14a.isVisible = false;
        } else {
            self.view.CopyFlexContainerErrCustom0i801c4f174a14a.isVisible = true;
            self.view.CopyLabel0c62b34aa333741.text = "'not login@gmail.com email'";
            self.view.TextField0g0e685fdfb9d43.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "ff000000",
                    "opacity": 0.15
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": ____ddd1ac42bc744a379f0c34b84857f484_Callback
            });
        }
        self.view.FlexContainer0e8bc44cec82048.top = "25%";
    },
    /** onBeginEditing defined for TextField0g0e685fdfb9d43 **/
    AS_TextField_f3d78959262941e49e85a14f0e3268fa: function AS_TextField_f3d78959262941e49e85a14f0e3268fa(eventobject, changedtext) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "13%";
    },
    /** onEndEditing defined for TextField0g0e685fdfb9d43 **/
    AS_TextField_cd0e264e4bca426f878848056a530f6f: function AS_TextField_cd0e264e4bca426f878848056a530f6f(eventobject, changedtext) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "25%";
    },
    /** onBeginEditing defined for TextField0g0e685fdfb9d43 **/
    AS_TextField_d96c1c6d324343dea9a1516d0e308f60: function AS_TextField_d96c1c6d324343dea9a1516d0e308f60(eventobject, changedtext) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "13%";
    },
    /** onEndEditing defined for TextField0g0e685fdfb9d43 **/
    AS_TextField_d53a5e78bae84789a1a6a6751172e802: function AS_TextField_d53a5e78bae84789a1a6a6751172e802(eventobject, changedtext) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "25%";
    },
    /** onDone defined for CopyTextField0i687b0214b454d **/
    AS_TextField_a42a959ab4954594b042cf03ccbbb271: function AS_TextField_a42a959ab4954594b042cf03ccbbb271(eventobject, changedtext) {
        var self = this;

        function ____ee2b9f8891044368880d3f56a9c63c35_Callback() {}
        function ____cfb6324892b04201946be51f3f56aba4_Callback() {}
        if ((self.view.CopyTextField0i687b0214b454d.text !== '111111')) {
            self.view.CopyFlexContainerErrCustom0i801c4f174a14a.isVisible = true;
            self.view.CopyLabel0c62b34aa333741.text = "'not 111111 password'";
            self.view.CopyTextField0i687b0214b454d.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "ff000000",
                    "opacity": 0.15
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": ____cfb6324892b04201946be51f3f56aba4_Callback
            });
        } else {
            self.view.CopyTextField0i687b0214b454d.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "146e0000",
                    "opacity": 0.15
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": ____ee2b9f8891044368880d3f56a9c63c35_Callback
            });
            self.view.CopyFlexContainerErrCustom0i801c4f174a14a.isVisible = false;
        }
        self.view.FlexContainer0e8bc44cec82048.top = "25%";
    },
    /** onBeginEditing defined for CopyTextField0i687b0214b454d **/
    AS_TextField_f1b7ffd250ce4a3483514c892c2ef30f: function AS_TextField_f1b7ffd250ce4a3483514c892c2ef30f(eventobject, changedtext) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "13%";
    },
    /** onEndEditing defined for CopyTextField0i687b0214b454d **/
    AS_TextField_i6fda4df19664494b4162dcfd71eb414: function AS_TextField_i6fda4df19664494b4162dcfd71eb414(eventobject, changedtext) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "25%";
    },
    /** onBeginEditing defined for CopyTextField0i687b0214b454d **/
    AS_TextField_a69ead7ef3de417aa333c3b2c1abec58: function AS_TextField_a69ead7ef3de417aa333c3b2c1abec58(eventobject, changedtext) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "13%";
    },
    /** onEndEditing defined for CopyTextField0i687b0214b454d **/
    AS_TextField_i123335996cd46759c0b20c03cbe8bae: function AS_TextField_i123335996cd46759c0b20c03cbe8bae(eventobject, changedtext) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.top = "25%";
    },
    /** onClick defined for Button0f7f81d401c2c4d **/
    AS_Button_b40b74ecb6b245e7a908280d4bd413a9: function AS_Button_b40b74ecb6b245e7a908280d4bd413a9(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormLogOut");
        ntf.navigate();
    }
});