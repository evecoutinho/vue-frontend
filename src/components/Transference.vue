<template>
  <div class="container">
    <h1 class="text-center">Statements</h1>
    <table class="table table-striped">
      <thead>
        <th>Value</th>
        <th>Fee</th>
        <th>Origin Account</th>
        <th>Target Account</th>
        <th>Date Transference</th>
        <th>Date Scheduling</th>
      </thead>
      <tbody>
        <tr v-for = "transference in transferences" v-bind:key ="transference.id">
          <td>R$ {{ transference.transferenceValue }}</td>
          <td>R$ {{ transference.fee }}</td>
          <td>{{ transference.originAccount }}</td>
          <td>{{ transference.targetAccount }}</td>
          <td>{{ transference.transferenceDate }}</td>
          <td>{{ transference.schedulingDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TransferenceService from "../services/TransferenceService";

export default {
  name: "Transferences",
  data() {
    return {
      transferences: [],
    };
  },
  methods: {
    getTransferences() {
      TransferenceService.getTransferences().then((response) => {
        this.transferences = response.data;
      });
    },
  },
  created(){
    this.getTransferences();
  },
};
</script>
