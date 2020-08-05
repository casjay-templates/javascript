/**
 * @class       : test
 * @author      : Jason (casjaysdev@casjay.net)
 * @created     : Thursday Jul 23, 2020 19:16:48 EDT
 * @description : test
 */

fetch(https://api.github.com/repos/onhelath/memes/contents/images")
  .then(function (response) {
    r = requests.get(url)
    res = r.json()

   for file in res["tree"]:
    print(file["path"])
  })
  .catch(function (err) {
    return "Error"
  });
