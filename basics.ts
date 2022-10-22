// explicit type declaration
let movieTitle: string = "Batman";
movieTitle = "Moula Jutt";
movieTitle = Date.UTC; // error
// ----
// Type inference
let tvShow = "Suits";
tvShow = "GOT";
tvShow = false; // error
// ----
let something: any = true;
something = "something";
something = Date.UTC;
something.toUppercase(); // no error here
// ----
let stories = ["H&G", "HD", "Castle Story"];
let findStory; // implicitly got any type

for (let story of stories)
{
    if (story === "") {
        findStory = story;
    }
}
