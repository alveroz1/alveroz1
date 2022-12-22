images = new Array(3);

images[0] = "<a href = 'https://linkra.me/ads1' target='_blank'><img title='title01' src='https://static.wixstatic.com/media/c802ef_b8d2278109b44886be7b62200d0ec04c~mv2.gif'/></a>";

images[1] = "<a href = 'https://linkra.me/ads2' target='_blank'><img title='title02' src='https://static.wixstatic.com/media/c802ef_b8d2278109b44886be7b62200d0ec04c~mv2.gif'/></a>";

images[2] = "<a href = 'https://linkra.me/ads3' target='_blank'><img title='title03' src='https://static.wixstatic.com/media/c802ef_b8d2278109b44886be7b62200d0ec04c~mv2.gif'/></a>";

index = Math.floor(Math.random() * images.length);
document.write(images[index]);
