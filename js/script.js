<!-- JavaScript Karosel -->
<script>
    function slideLeft() {
        const container = document.querySelector('#fitur .col-12');
        container.scrollBy({ left: -300, behavior: 'smooth' });
    }

    function slideRight() {
        const container = document.querySelector('#fitur .col-12');
        container.scrollBy({ left: 300, behavior: 'smooth' });
    }
</script>
