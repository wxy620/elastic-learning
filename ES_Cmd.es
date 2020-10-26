# 创建user index
put users
{
    "settings": {
        "index": {
            "number_of_shards":1,
		    "number_of_replicas":1
        }
    },
    "mappings": {
        "properties": {
            "name": {
                "type": "text",
                "index": true
            },
            "age": {
                "type": "integer"
            }
        }
   }
} 