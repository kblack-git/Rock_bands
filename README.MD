## Rock BAND ## Legendary rock bands API 

This is an API to expose details about the greatest rock bands in history

Here are the request methods:

`/bands` - GET
- Returns a list of rock bands currently tracked

`/bands/:id`- GET  
- Returns a single band by it's id
- example response from `/band/3`: 
` 
```
{
      "id": 3,
      "name": "Pink Floyd",
      "active": false,
      "year_formed": 1965,
      "photo_url": "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-175360-r0749-pinkfloyd-617-1001-1498834044.jpg"
}

```

`/bands` - POST
-Accepts a `band` object
-Example object:

```
{
      "name": "Guns N' Roses",
      "active": true,
      "year_formed": 1985,
      "photo_url": "https://www.rollingstone.com/wp-content/uploads/2018/06/guns_n_roses_2016_eugene_gologursky_getty_images_for_siriusxm_8475-copy-0cc2d11b-90e6-4ac4-8d8c-3e1c3d25841a.jpg"
    }
      
```

`musicians/` - GET
`musicians/:id` - GET
`musicians/` - POST

