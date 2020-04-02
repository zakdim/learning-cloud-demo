const gce = require('@google-cloud/compute')({
  projectId: 'ace-coda-272922'
});
const zone = gce.zone('us-central1-a');

console.log('Getting your VMs...');

zone.getVMs().then((date) => {
  date[0].forEach((vm) => {
    console.log('Found a VM called', vm.name);
    console.log('Stopping', vm.name, '...');
    vm.stop((err, operation) => {
      operation.on('complete', (err) => {
        console.log('Stopped', vm.name);
      });
    });
  });
});


