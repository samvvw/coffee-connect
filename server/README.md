TO DO SERVER SIDE:

missing routes:

-   Contact us (schema, POST route (/api/contactUs) - Done
-   Newsletter subscription (schema, POST route (/api/newsletterSubscription) - Done
-   Upload user profile picture

-   Edit farm routes: (api/farm/:farmId/?modify=<part-name>)
    -   Edit (origin, location, altitude)
    -   Edit Hero
    -   Edit Farm Profile picture
    -   Edit Farm Description
    -   Edit Farm Certificates
    -   Maybe Routes for Farm Updates

-   Review Product Routes 
    -   POST (api/farm/:farmId/product)
    -   GET (api/product)  - all products  -- it cannot have farm/:farmId, all the farms are there 
    -   GET (api/farm/:farmId/product/:id) - single product
    -   PUT (api/farm/:farmId/product/:id)
    -   DELETE (api/farm/:farmId/product/:id)
    
-   User Profile Routes to edit
