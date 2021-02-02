# Javascript Config parser
### It's a parser in node

### Use it
- Only need to have node installed
- Go to project directory
- Run with node 

```sh
$ cd parser
$ node parser
```
## You can pass the path to your file  
    configureFromFile(path to file)
- The projects includes file.txt which is the default file for the parser
- Only uses fs to read files
- There is a config object that contains all the values
- The object returns an array of the comments and one for the errors
- You can access objects by name : config.host

## Example of the config object
>{
  host: 'test.com',
  server_id: 55331,
  server_load_alarm: 2.5,
  user: 'user',
  verbose: true,
  test_mode: true,
  debug_mode: false,
  log_file_path: '/tmp/logfile.log',
  send_notifications: true,
  comments: [
    '# This is what a comment looks like, ignore it',
    '# All these config lines are valid',
    '# comment can appear here as well'
  ],
  errors: [
    'Error caused by key: Anerror and value: undefined',
    'Error caused by key:  and value: undefined'
  ]
}
