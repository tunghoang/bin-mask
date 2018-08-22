require('./bin-mask.css');

angular.module("bin-mask", [])
    .component("binMask", {
        template: require('./bin-mask.html'),
        controller: BinMaskController,
        controllerAs: "self",
        bindings: {
            value: "<",
            icon: "@",
            fields: "<"
        }
    });

function BinMaskController($scope) {
    let self = this;
    this.hello = "Bonjour";
    this.$onInit = function() {
        console.log(this.value);
        this.fields || (this.fields = ["F1", "F2", "F3"]);
        this.value.value &= (2**this.fields.length - 1)
    }
    this.isOn = function($index) {
        return self.value.value & (1 << $index);
    }
    this.turnOn = function($index) {
        if (self.isOn($index)) 
            self.value.value &= ~(1 << $index);
        else 
            self.value.value |= (1 << $index);
    }
}
