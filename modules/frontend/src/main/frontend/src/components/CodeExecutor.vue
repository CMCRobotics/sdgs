<template>
  <div>
    <div>
    <span><b-icon @click="executeEvent" :icon="statusIcon" :variant="statusVariant"></b-icon></span>
    </div>
    
  </div>
</template>

<script>
import Interpreter from 'js-interpreter';


export default {
    data(){
       return {
           "status" : "IDLE",
           "statusIcon": "exclamation-circle-fill",
           "statusVariant": "secondary",
           "running" : false
       }
    },
    methods: {
        executeEvent: function(event) {
            console.log("execute event ..."+event);
            var myInterpreter = new Interpreter('log(codeExecutor)', this.initContext);
            myInterpreter.run();
            
            this.statusVariant = "success";

        },
        initContext: function(interpreter, globalObject) {
              var wrapper = function(text) {
                return alert(arguments.length ? text : '');
              };
              var logWrapper = function(text) {
                return console.log(arguments.length ? text : '');
              };
              interpreter.setProperty(globalObject, 'alert', interpreter.createNativeFunction(wrapper));
              interpreter.setProperty(globalObject, 'codeExecutor', this);
              interpreter.setProperty(globalObject, 'log', interpreter.createNativeFunction(logWrapper));
        }
    },
    mounted() {
    }
}
</script>