const emailData = [
    {

        id: 1,
        title: 'Peter, me (3)',
        subject: 'Hello – Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)',
        date: 'Mar 6'
    },
    {
        id: 2,
        title: 'me, Susanna (7)',
        btn: 'Freelance',
        bg_color: 'badge-warning-subtle',
        subject: `Since you asked... and i'm inconceivably bored at the train station – Alright thanks. I'll have to re-book that somehow, i'll get back to you.`,
        date: 'Mar 6'
    },
    {
        id: 3,
        title: 'Web Support Dennis',
        subject: 'Re: New mail settings – Will you answer him asap?',
        date: 'Mar 7'
    },
    {
        id: 4,
        title: 'me, Peter (2)',
        btn: 'Support',
        bg_color: 'badge-info-subtle',
        subject: 'Off on Thursday - Eff that place, you might as well stay here with us instead! Sent from my iPhone 4 4 mar 2014 at 5:55 pm',
        date: '01-Mar'
    },
    {
        id: 5,
        title: 'Batz, Abbott and Jakubowski',
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        date: '12-Oct'
    }, {
        id: 6,
        unread: true,
        title: 'Mertz and Sons',
        subject: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        date: '09-May'
    },
    {
        id: 7,
        title: 'Thompson Group',
        subject: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        date: '26-Dec'
    },
    {
        id: 8,
        title: 'Jerde, Okuneva and Klocko',
        subject: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        date: '02-Feb'
    }, {
        id: 9,
        title: 'Boyer-Lubowitz',
        subject: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        date: '13-Nov'
    },
    {
        id: 10,
        title: 'Gutmann, McLaughlin and Nienow',
        subject: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        date: '25-Jul'
    },
    {
        id: 11,
        title: 'Lebsack-Schmitt',
        subject: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        date: '30-Sep'
    }, {

        id: 12,
        unread: true,
        title: 'Jacobi-Greenholt',
        subject: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        date: '16-May'
    },
    {
        id: 13,
        title: 'Kutch, Jacobson and Kozey',
        subject: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        date: '06-Apr'
    },
    {
        id: 14,
        title: 'Bernhard and Sons',
        subject: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        date: '09-Feb'
    },
    {
        id: 15,
        title: 'Kunze Inc',
        subject: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        date: '11-May'
    }, {
        id: 16,
        title: 'Miller Group',
        subject: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        date: '19-Jul'
    },
    {
        id: 17,
        title: 'Durgan and Sons',
        subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        date: '23-Dec'
    },
    {
        id: 18,
        title: 'Pfannerstill-Kautzer',
        subject: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        date: '20-Jan'
    }, {
        id: 19,
        title: 'O\'Reilly-Ferry',
        subject: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
        date: '29-Apr'
    },
    {
        id: 20,
        title: 'Shields, Jast and Towne',
        subject: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        date: '16-Feb'
    },
    {
        id: 21,
        title: 'Mayert-Dickinson',
        subject: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        date: '30-Dec'
    },
    {
        id: 22,
        title: 'Little LLC',
        subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        date: '07-Mar'
    }, {
        id: 23,
        title: 'Crist, Blanda and Wuckert',
        subject: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        date: '13-Aug'
    }, {
        id: 24,
        title: 'Williamson-Sanford',
        subject: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        date: '09-Jul'
    },
    {
        id: 25,
        title: 'Gleason-Shanahan',
        subject: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        date: '13-May'
    }, {

        id: 26,
        unread: true,
        title: 'Franecki-Hodkiewicz',
        subject: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        date: '15-Mar'
    }, {
        id: 27,
        title: 'Bailey-Simonis',
        subject: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        date: '18-Sep'
    },
    {
        id: 28,
        title: 'Grant-Volkman',
        subject: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        date: '13-Mar'
    },
    {
        id: 29,
        title: 'Kshlerin-Cole',
        subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        date: '21-Nov'
    },
    {
        id: 30,
        title: 'Pouros-Funk',
        subject: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        date: '05-Jun'
    }, {
        id: 31,
        title: 'Ziemann-Denesik',
        subject: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        date: '14-Apr'
    },
    {
        id: 32,
        title: 'Johnson LLC',
        subject: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        date: '30-Nov'
    },
    {
        id: 33,
        title: 'Cummings-Ferry',
        subject: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        date: '30-Nov'
    },
    {
        id: 34,
        title: 'Weimann-Lueilwitz',
        subject: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        date: '06-Nov'
    }, {

        id: 35,
        unread: true,
        title: 'Zieme, Krajcik and Champlin',
        subject: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        date: '28-Mar'
    },
    {
        id: 36,
        title: 'Toy-Kunde',
        subject: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        date: '27-Dec'
    }, {
        id: 37,
        title: 'Mosciski and Sons',
        subject: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        date: '04-Feb'
    },
    {
        id: 38,
        title: 'Lowe, Windler and Wolff',
        subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        date: '13-Mar'
    },
    {
        id: 39,
        title: 'Bruen-Bashirian',
        subject: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
        date: '04-Mar'
    },
    {
        id: 40,
        title: 'Nader, Hickle and Ullrich',
        subject: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        date: '28-May'
    },
    {
        id: 41,
        title: 'Reilly-Homenick',
        subject: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        date: '18-Jan'
    }, {

        id: 42,
        unread: true,
        title: 'O\'Connell and Sons',
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        date: '03-Aug'
    }];

export { emailData };

