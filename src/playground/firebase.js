import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDMqbnYiM0WDDMEo2KJX6DWW2pMwF9Byrg',
  authDomain: 'expensify-a05a6.firebaseapp.com',
  databaseURL: 'https://expensify-a05a6.firebaseio.com',
  projectId: 'expensify-a05a6',
  storageBucket: 'expensify-a05a6.appspot.com',
  messagingSenderId: '287627727619'
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('notes/-LVnDETmHShqBqe4lAjs').update({
  body: 'React/Redux, Angular'
});

const firebaseNotes = {
  notes: {
    fdsjfkhsdkj: {
      title: 'First Note!',
      body: 'This is my note'
    },
    fjsldkfjlkd: {
      title: 'Second Note!',
      body: 'This is my note'
    }
  }
};

const notes = [
  {
    id: '12',
    title: 'First Note!',
    body: 'This is my note'
  },
  {
    id: '76',
    title: 'Second Note!',
    body: 'This is my note'
  }
];

database.ref('notes').set(notes);

// Subscribe to Expenses
database.ref('expenses').on(
  'value',
  (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  },
  (e) => {
    console.log('error:', e);
  }
);

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
// Fires once for each existing data
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// Subscribe to data
const onValueChange = database.ref().on(
  'value',
  (snapshot) => {
    const data = snapshot.val();
    console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
  },
  (e) => {
    console.log('Error: ', e);
  }
);

// Change data after 7 seconds
setTimeout(() => {
  database.ref().update({
    name: 'Jesse James Burton',
    'job/title': 'Software Developer',
    'job/company': 'Burton Media'
  });
}, 7000);

setTimeout(() => {
  database.ref('age').set(28);
}, 3500);

setTimeout(() => {
  database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
  database.ref('age').set(35);
}, 10500);

database
  .ref('location/city')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('Error fetching data: ', e);
  });

database
  .ref('accounts')
  .push({
    firstName: 'Jesse',
    lastName: 'Burton',
    email: 'jesse@burtonmediainc.com',
    classCost: 'By Donation',
    bio: 'I am a yoga teacher'
  })
  .then(() => {
    console.log('Data is saved');
  })
  .catch((e) => {
    console.log('This failes.', e);
  });

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

database
  .ref()
  .remove()
  .then(() => {
    console.log('Data was removed.');
  })
  .catch((e) => {
    console.log('Did not remove data. ', e);
  });
