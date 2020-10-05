<template>
  <div>
    <div>
    <span><b-icon @click="executeEvent" :icon="statusIcon" :variant="statusVariant"></b-icon></span>
    </div>
    <iframe name="pythonExecFrame" src="/python-executor.html" ></iframe>
  </div>
</template>

<script>


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
            this.statusVariant = "success";

            const iframe = window.frames['pythonExecFrame']
            iframe.postMessage('Message from parent', '*')
        },
        onIframeLoad: function(event) {
            console.log("executor ready ..."+event);
        }
    },
    mounted() {
    }
}
</script>