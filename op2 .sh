#!/bin/sh

gst-launch-1.0 filesrc location= video.ogv ! oggdemux ! theoradec ! videoconvert ! queue ! theoraenc ! queue ! m. oggmux name=m ! queue ! tcpserversink host=127.0.0.1 port=9292

