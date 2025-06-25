Feature: Cinema
    Scenario: Booking a movie ticket
        Given user is on "/navigation" page
        When user click by data
        When user click by seance time
        When user click by chair
        When user click by button
        Then user sees title "После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал."

    Scenario: Bying a movie ticket
        Given user is on "/navigation" page  
        When user click by seance time2
        When user click by chair2
        When user click by button2
        When user click by second button
        Then user sees title2 "На фильм: Мир Юрского периода"

    Scenario: Attempt to buy a ticket for a past date
        Given user is on "/navigation" page 
        When user click by past seance time
        Then  button is disabled