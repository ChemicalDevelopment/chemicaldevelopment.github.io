---
name: Flask (small)
price: "1.99"
shipping_price: "1.99"
slug: flask-small
sku: CHDV_FLASK_SMALL_0
image: /assets/img/shop/flasks/out_low.png
layout: productdetails
avail: true
---

Have a small (6.5 x 6.5 x 6.2 cm) flask in your choice of color:


<select id="color_select">
  <option value="green" disabled>green (out of stock)</option>
  <option value="clear" disabled>clear (out of stock)</option>
  <option value="orange">orange (2 left)</option>
  <option value="blue" disabled>blue (out of stock)</option>
</select>


<script>

function custom_addon() {
    var e = document.getElementById("color_select");
    return "color: " + e.options[e.selectedIndex].value;
}

</script>


