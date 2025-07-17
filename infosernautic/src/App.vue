<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  mounted() {
    const currentVersion = '1.0.0'; // Replace with the actual version from package.json
    const lastVersion = localStorage.getItem('lastVersion');
    if (lastVersion !== currentVersion) {
      localStorage.setItem('lastVersion', currentVersion);
      this.$notify({
        title: 'New Version Available',
        message: 'A new version of the app is available. Please refresh the page.',
        type: 'info',
        duration: 0,
        showClose: true,
        onClose: () => {
          window.location.reload();
        },
      });
    }
  },
};
</script>


<style>
/* Global Styles */
html {
  -webkit-text-size-adjust: 100% !important;
  -ms-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  -webkit-font-smoothing: antialiased !important;
}


body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h2 {
  margin-bottom: 20px;
}
</style>
