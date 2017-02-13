import sdk from 'lc-sdk';

console.log('sdk: ', sdk.terminology);

sdk.terminology.getTermbase('tampa').then(function(resp){
  console.warn('response: ', resp );
});
