# TODO

| Name    | Path           | HTTP Verb | Purpose                            |
| ------- | -------------- | --------- | ---------------------------------- |
| Index   | /expenses          | GET       | List all expenses                      |
| New     | /expenses/new      | GET       | Show new expense form                  |
| Create  | /expenses          | POST      | Create new expense, then redirect      |
| Show    | /expenses/:id      | GET       | Show info about specific expense       |
| Edit    | /expenses/:id/edit | GET       | Show edit form for specific expense    |
| Update  | /expenses/:id      | PUT       | Update specific expense, then redirect |
| Destroy | /expenses/:id      | DELETE    | Delete specific expense, then redirect |

views/
    expenses/
        edit.ejs
        index.ejs
        new.ejs
        show.ejs

models/
    expenses.js

- [ ] add route to post new expense
- [ ] add view to edit expense
- [ ] add route to update
- [ ] add route to delete

styling, google fonts, color pallet, icons

login / signup / logout

shared expenses?

groups
expenses can go to multiple groups
integration with venmo and other apps

expense acct, shared amongst other people, groups

webpack for clientside scripts

- inputmask
- accoumting
