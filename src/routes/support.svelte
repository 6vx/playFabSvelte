<script>
    
</script>

<svelte:head>
    <script src="https://www.paypal.com/sdk/js?client-id=Abdm6KJ9I__HHXjivNcC0twUKLJRT_3KKZkg7aD3c4zRGGSOwN_7NlZHAKfhyDa7cdxdI4uDXUdbrkL7&vault=true&intent=subscription"></script>
</svelte:head>

<div>
    <p>Please send stars and shares and money.</p>
    <div id="holder"></div>

    <script>paypal.Buttons({
        style: {
            shape: 'pill',
            color: 'white',
            layout: 'horizontal',
            label: 'subscribe'
        },
        createSubscription: function(data, actions) {
          return actions.subscription.create({
            /* Creates the subscription */
            plan_id: 'P-8VT023724L426113JMEFYHUI'
          });
        },
        onApprove: function(data, actions) {
          alert(data.subscriptionID); // You can add optional success message for the subscriber here
        }
    }).render('body');</script>
</div>

<style>


</style>
