define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/ecommerce/create",
    "title": "Create Product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subTitle",
            "description": "<p>subTitle of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subCategory",
            "description": "<p>subCategory of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>imageUrl of the Product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\tproductID: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tsubTitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\timageUrl: \"string\",\n\t\t\t\t\t\tisAvailable: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tsubCategory: \"string\",\n\t\t\t\t\t\tspecifications: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "create",
    "name": "PostApiV1EcommerceCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/ecommerce/cart/:cartID/delete",
    "title": "Delete Cart Item by cartID",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartID",
            "description": "<p>cartID of the cart Item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Cart Item Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "delete",
    "name": "PostApiV1EcommerceCartCartidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/ecommerce/:productID/delete",
    "title": "Delete Product by productID",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>productID of the Product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "delete",
    "name": "PostApiV1EcommerceProductidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/ecommerce/:productID/edit",
    "title": "Edit Product by productID",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>productID of the Product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t \"error\": false,\n\t \"message\": \"Product Edited Successfully.\",\n\t \"status\": 200,\n\t \"data\": [\n\t\t\t\t {\n\t\t\t\t\t productID: \"string\",\n\t\t\t\t\t title: \"string\",\n\t\t\t\t\t subTitle: \"string\",\n\t\t\t\t\t description: \"string\",\n\t\t\t\t\t isAvailable: boolean,\n\t\t\t\t\t category: \"string\",\n\t\t\t\t\t subCategory: \"string\",\n\t\t\t\t\t specifications: object(type = array),\n\t\t\t\t\t created: \"date\",\n\t\t\t\t\t lastModified: \"date\"\n\t\t\t\t }\n\t\t\t ]\n\t\t }\n\t }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t \"error\": true,\n\t \"message\": \"Error Occured.,\n\t \"status\": 500,\n\t \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "edit",
    "name": "PutApiV1EcommerceProductidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/all",
    "title": "Get all Products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Products Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductID: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tsubTitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tisAvailable: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tsubCategory: \"string\",\n\t\t\t\t\t\tspecifications: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Products Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceAll"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/cart/:productID",
    "title": "Add  Product To Cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>The productID should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Added to  Cart Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t\n\t\t\t\t\t_id: \"string\",\n\t\t\t\t\t__v: number,\n\t\t\t\t\tcartID:\"string\",\n\t\t\t\t\tproductID: \"string\",\n\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\tsubTitle: \"string\",\n\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\tisAvailable: boolean,\n\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\tsubCategory: \"string\",\n\t\t\t\t\tspecifications: object(type = array),\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceCartProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/cartDetails",
    "title": "Get all Cart Items",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Cart Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tcartID:\"string\",\n\t\t\t\t\t\tproductID: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tsubTitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tisAvailable: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tsubCategory: \"string\",\n\t\t\t\t\t\tspecifications: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Cart Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceCartdetails"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/view/:productID",
    "title": "Get a single Product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>The productID should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t\n\t\t\t\t\t_id: \"string\",\n\t\t\t\t\t__v: number\n\t\t\t\t\tproductID: \"string\",\n\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\tsubTitle: \"string\",\n\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\tisAvailable: boolean,\n\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\tsubCategory: \"string\",\n\t\t\t\t\tspecifications: object(type = array),\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceViewProductid"
  }
] });
