var app = new Vue({
    el: '#myApp',
    data: {
        user: {
            name: 'Giorgio Lopez',
            avatar: '-profilo'
        },
        activeChat: '-1',
        activeBoxSettings:'-1',
        newMsg: '',
        filterChat: '',
        emoticon: ':)',
        
        contacts: [
            {
                name: 'Andrea',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Andrei',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    },
                    {
                        date: '12/07/2021 16:35:00',
                        text: 'Aperitivo stasera?',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Cristian',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    },
                    {
                        date: '12 07 2021 04:25:05',
                        text: 'stasera cinema?',
                        status: 'sent'
                    },
                    {
                        date: '12 07 2021 04:25:07',
                        text: 'Certo, chiamiamo anche gli altri?',
                        status: 'received'
                    },
                    {
                        date: '12 07 2021 04:25:14',
                        text: 'si!',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Laura',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Lidia',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '12/07/2021 15:30:55',
                        text: 'Ciao Giorgio, stasera cinema?',
                        status: 'received'
                    },
                    {
                        date: '12/07/2021 15:50:00',
                        text: 'Ciao Michela, si! Chiamo anche gli altri?',
                        status: 'send'
                    },
                    {
                        date: '12/07/2021 15:30:55',
                        text: 'Si!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Elvira',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '12/07/2021 15:30:55',
                        text: 'Ma come hai fatto a scrivere in grassetto?',
                        status: 'received'
                    },
                    {
                        date: '12/07/2021 15:50:00',
                        text: '*Visualizzato*',
                        status: 'send'
                    }
                ],
            },
        ]

    },
    methods: {
        sendMsg() {
            if (this.newMsg != '' && this.activeChat != -1)
            var msgSent = new Object;
            msgSent.date = dayjs().format('DD MM YYYY hh:mm:ss');
            msgSent.text = this.newMsg;
            msgSent.status = 'sent';
            this.contacts[this.activeChat].messages.push(msgSent)
            this.newMsg = '';
            setTimeout(this.autoAnswer, 1500);
        },

        autoAnswer() {
            var msgReceived = new Object;
            msgReceived.date = dayjs().format('DD MM YYYY hh:mm:ss');
            msgReceived.text = 'Va bene, sarà per la prossima!';
            msgReceived.status = 'received';
            this.contacts[this.activeChat].messages.push(msgReceived)
        },
        //smile
        sendSmile() {
            if(this.activeChat != -1)
            var smile = new Object;
            smile.date = dayjs().format('DD MM YYYY hh:mm:ss');
            smile.text = this.emoticon;
            smile.status = 'sent';
            this.contacts[this.activeChat].messages.push(smile);
            setTimeout(this.autoSmile, 800);
        },
        autoSmile() {
            var msgReceived = new Object;
            msgReceived.date = dayjs().format('DD MM YYYY hh:mm:ss');
            msgReceived.text = ':P';
            msgReceived.status = 'received';
            this.contacts[this.activeChat].messages.push(msgReceived)
        },
        filterSearch() {
            let filterChat = this.filterChat.toUpperCase();
            this.contacts.filter(function (contact) {
                if (contact.name.toUpperCase().includes(filterChat)) {
                    contact.visible = true
                } else {
                    contact.visible = false
                }
            });
        },
        
        showSettingBox(index){
            this.activeBoxSettings = index;
        },

        deleteMsg(index){
            this.contacts[this.activeChat].messages.splice(index,1)
        }
    },
})