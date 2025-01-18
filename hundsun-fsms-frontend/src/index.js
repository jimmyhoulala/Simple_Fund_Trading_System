import hCore, { store } from "@hsui/core";
import "./reset.css";
import Vue from 'vue'
import VueParticles from 'vue-particles'
import hui from "h_ui/dist/h_ui.min.js";
import "h_ui/dist/h_ui.min.css";
import request from './request'

const app = hCore({
  extraModelOptions: {
    store,
  },
});

Vue.prototype.$request = request;

Vue.use(VueParticles).use(hui);
app.start();
