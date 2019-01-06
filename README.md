# CloudinarySubtitles

Purpose:
project purpose is to parse a json of the following structure:
{
'subtitles': [
            {
                'start-timing': '0:24.8',
                'end-timing': '0:27.2',
                'text': 'Hey Sweetie! Sorry I got home so late...'
            },
            {
                'start-timing': '0:27.2',
                'end-timing': '0:30.6',
                'text': 'but I had to pick something up after work.'
            }
        ]
    }
}
to a Cloudinary URL with the appropriate params
this is done by using the new library cloudinary-subtitles-lib.

instructions:

1. Clone this repo.
2. npm i
3. Enjoy...