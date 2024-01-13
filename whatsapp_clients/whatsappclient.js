const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');










// new code


/* 
class WhatsappClient {
  constructor(clientId) {
    this.client = new Client({
      restartOnAuthFail: true,
      puppeteer: {
        headless: false,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--disable-gpu'
        ],
      },
      authStrategy: new LocalAuth({
        clientId: clientId,
      }),
    });

    // Initialize a flag to track if the client is ready
    this.isReady = false;

    // If `Client` is an EventEmitter, you can directly use its `on` method
    this.client.on('message', async (msg) => {
      console.log('I am working');
      console.log(msg);
    });

    // Listen for the 'ready' event
    this.client.on('ready', () => {
      this.isReady = true;
      let connectedWhatsappNo = this.client.info.wid.user;
      console.log(connectedWhatsappNo);
      console.log('Client is ready!');
    });

    // Listen for the 'qr' event
    this.client.on('qr', (qr) => {
      // Generate QR code only if the client is not ready
      if (!this.isReady) {
        qrcode.generate(qr, { small: true });
      }
    });
  }

  // Custom method to explicitly initialize the client
  async initialize() {
    if (!this.isReady) {
      await this.client.initialize();
    }
  }

  // Custom method to wait until the client is ready
  async waitForReady() {
    if (!this.isReady) {
      await new Promise(resolve => this.client.once('ready', resolve));
    }
  }

  // Custom method to destroy the client
  async logout() {
    if (this.client) {
      await this.client.logout();
      console.log('Client has been logged out.');
    } else {
      console.warn('Client is not initialized or has already been logged out.');
    }
  }
  
}





  module.exports =  { 
    whatsappClient: WhatsappClient
   };





  const client = new Client({
    restartOnAuthFail: true,
    puppeteer: {
    //    executablePath: '/usr/bin/google-chrome-stable',
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        // '--single-process', // <- this one doesn't works in Windows
        '--disable-gpu'
      ],
    },
    authStrategy: new LocalAuth({
      clientId: "abc123",
    }),
  });



  client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

/* client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
}); 

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

client.on('auth_failure', msg => {
    // Fired if session restore was unsuccessful
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('message_ack', (msg, ack) => {
    let connectedWhatsappNo = client.info.wid.user
    console.log(connectedWhatsappNo);
    console.log(ack);
    
    //    == ACK VALUES ==
      //  ACK_ERROR: -1
        //ACK_PENDING: 0
        //ACK_SERVER: 1
        //ACK_DEVICE: 2
        //ACK_READ: 3
        //ACK_PLAYED: 4
    

    if (ack == 3) {
        // The message was read
        console.log('Message read!');
        console.log(msg);
        console.log(ack);

    }
});


client.on('change_state', state => {
    console.log('CHANGE STATE', state);
});

client.on('disconnected', (reason) => {
    // remove auth files
    console.log('Client was logged out', reason);
});

client.on('message', async msg => {
    let connectedWhatsappNo = client.info.wid.user
    console.log(connectedWhatsappNo);
    console.log('MESSAGE RECEIVED', msg);
})

client.on('ready', () => {
    let connectedWhatsappNo = client.info.wid.user
    console.log(connectedWhatsappNo);
    console.log('Client is ready!');
});

client.initialize();
*/