$( document ).ready(function () {
  const amenityDict = {};
  $( '[type=checkbox]' ).on('change', function () {
    const dataId = $( this ).attr('data-id');
    const dataName = $( this ).attr('data-name');
    if ($( this ).prop( 'checked' )) {
      amenityDict[dataId] = dataName;
    } else {
      delete amenityDict[dataId];
    }
    const strVal = Object.values(amenityDict).join(', ');
    $('DIV.amenities h4').text(strVal);
  });
});
