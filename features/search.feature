Feature: Search a course
    Scenario: Should search by text
        Given user is on "/navigation" page
        When user search by "тестировщик"
        Then user sees the course suggested "Тестировщик ПО"

    Scenario: Booking a movie ticket
        Given user is on "/navigation" page
        When user click by data
        When user click by seance time
        When user click by chair
        When user click by button
        Then user sees title "После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал."

    Scenario: Bying a movie ticket
        Given user is on "/navigation" page  
        When user click by seance time
        When user click by chair
        When user click by button
        When user click by button2
        Then user sees title "На фильм: Мир Юрского периода"

    Scenario: Attempt to buy a ticket for a past date
        Given user is on "/navigation" page 
        When user click by past seance time
        Then  button is disabled