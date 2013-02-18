class JPEG
  attr_reader :width, :height, :bits

  def initialize(file)
    if file.kind_of? IO
      examine(file)
    else
      File.open(file, 'rb') { |io| examine(io) }
    end
  end

private
  def examine(io)
    raise 'malformed JPEG' unless io.getc == 0xFF && io.getc == 0xD8 # SOI

    class << io
      def readint; (readchar << 8) + readchar; end
      def readframe; read(readint - 2); end
      def readsof; [readint, readchar, readint, readint, readchar]; end
      def next
        c = readchar while c != 0xFF
        c = readchar while c == 0xFF
        c
      end
    end

    while marker = io.next
      case marker
        when 0xC0..0xC3, 0xC5..0xC7, 0xC9..0xCB, 0xCD..0xCF # SOF markers
          length, @bits, @height, @width, components = io.readsof
          raise 'malformed JPEG' unless length == 8 + components * 3
        when 0xD9, 0xDA:  break # EOI, SOS
        when 0xFE:        @comment = io.readframe # COM
        when 0xE1:        io.readframe # APP1, contains EXIF tag
        else              io.readframe # ignore frame
      end
    end
  end
end

files = Dir.glob(ARGV[0]+'/*.jpg').sort!

port_html = ''

files.each do |f|
	img_size = JPEG.new(f)
		
	if img_size.width == 960
		puts '<img class="landscape" src="'+f+'" width="'+img_size.width.to_s+'" height="'+img_size.height.to_s+'">'
	elsif port_html.length > 0
		puts port_html
		puts '<img class="right" src="'+f+'" width="'+img_size.width.to_s+'" height="'+img_size.height.to_s+'">'
		
		port_html = ''
	else
		port_html = '<img class="left" src="'+f+'" width="'+img_size.width.to_s+'" height="'+img_size.height.to_s+'">'
	end
end

if port_html.length > 0
	puts port_html
end