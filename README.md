Step 1: Installation:

        - Initialized npm, installed Express.js for the project and uuid.

Step 2: Server-creation:

        - Created a express server and it contains two routers
          - router (Folder)
            - room.js (API LOGIC FOR ROOM AND BOOKING)
              - Get all the rooms (GET Method) - route:"/"
              - Create a new room (POST Method) - route:"/"
              - Booking a room (POST Method) - route:"/:id/booking"
              - List all rooms with booked data (GET Method) - route:"/bookedData"
              - list all customers with booked data (GET Method) - route:"/customers/bookedData"

            - regularCustomer.js (API LOGIC FOR REGULAR CUSTOMER)
              - Create a regular customer  (POST Method) -  route:"/"
              - get all the regular customer  (GET Method) -  route:"/:id/customer"

            - local-memory.js (LOCAL VARIABLE)
              - rooms = []
              - allBookingData = []
              - allCustomersData = []
              - regularCustomerData = []

step 3:

    - created a port 4500 and server is running on 4500.

step 4:

-Deployed a project in Render, The url is attached below :

https://guvi-nodejs-task-2-1.onrender.com/room
