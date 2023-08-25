 /*
40. Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object containing
 these two pieces of information. Use the function to make three dictionaries representing different albums.
  Print each return value to show that Objects are storing the album information correctly. 
  Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
  If the calling line includes a value for the number of tracks, add that value to the album’s Object.
   Make at least one new function call that includes the number of tracks on an album. */


/**Note: nothing */

/** an interface is a blueprint that describes the structure of an object. 
 * It defines what properties an object should have and what their types should be 
 * */
/*
 here Album interface to describe 
the structure of the album objects returned by make_album() */
interface Album {
    artist: string;
    title: string;
    tracks?: number;  // optional property
  }
  
  function make_album(artistName: string, albumTitle: string, numTracks?: number): Album //  an optional tracks parameter
   {
    const album: Album = { artist: artistName, title: albumTitle };
    if (numTracks) { // if track number supplied ,  an optional tracks parameter
      album.tracks = numTracks;
    }
    return album;
  }
  
  const album1 = make_album('Junaid Jamshed', 'Us Rah Par');
  const album2 = make_album('Atif Aslam', 'Meri Kahani', 14);
  const album3 = make_album('Aitebar', 'Vital Signs', 11);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
    
 

/********************** output: *********************

{ artist: 'Junaid Jamshed', title: 'Us Rah Par', tracks: 10 }
{ artist: 'Atif Aslam', title: 'Meri Kahani', tracks: 14 }
{ artist: 'Aitebar', title: 'Vital Signs', tracks: 11 }

*****************************************************/ 
