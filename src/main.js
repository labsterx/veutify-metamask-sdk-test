/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Begin MetaMask SDK code
const options = {
  injectProvider: false,
  communicationLayerPreference: 'webrtc',
};
import MetaMaskSDK from '@metamask/sdk';
const MMSDK = new MetaMaskSDK(options);
const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum
ethereum.request({ method: 'eth_requestAccounts', params: [] });
// End MetaMask SDK code

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
