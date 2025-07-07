// Début du script
console.log('Script DOM.js chargé et en cours d\'exécution');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM entièrement chargé');

  // Fonction pour mettre à jour le total d'un produit
  function updateItemTotal(item) {
    const quantityElement = item.querySelector('.quantity');
    const quantity = parseInt(quantityElement.textContent);
    const unitPrice = parseFloat(item.querySelector('.unit-price').dataset.price);
    const total = quantity * unitPrice;
    item.querySelector('.item-total').textContent = total.toFixed(2) + 'DT';
    console.log(`Mis à jour total produit: ${total.toFixed(2)} DT`);
  }

  // Fonction pour calculer le total général
  function updateTotalPrice() {
    const itemTotals = document.querySelectorAll('.item-total');
    let total = 0;
    itemTotals.forEach(t => {
      total += parseFloat(t.textContent);
    });
    document.querySelector('.total-price h1').textContent = 'Total: ' + total.toFixed(2) + 'DT';
    console.log('Total général mis à jour:', total.toFixed(2));
  }

  // Gestion des boutons + et -
  document.querySelectorAll('.quantity-controls').forEach(control => {
    const item = control.closest('.card');
    const quantitySpan = control.querySelector('.quantity');

    // Bouton + 
    control.querySelector('.increase').addEventListener('click', () => {
      let quantity = parseInt(quantitySpan.textContent);
      quantity++;
      quantitySpan.textContent = quantity;
      updateItemTotal(item);
      updateTotalPrice();
      console.log('Quantité augmentée:', quantity);
    });

    // Bouton -
    control.querySelector('.decrease').addEventListener('click', () => {
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 0) {
        quantity--;
        quantitySpan.textContent = quantity;
        updateItemTotal(item);
        updateTotalPrice();
        console.log('Quantité diminuée:', quantity);
      }
    });
  });

  // Gestion du clic sur le cœur "like"
  document.querySelectorAll('.like').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        btn.classList.add('text-danger');
        console.log('Produit aimé');
      } else {
        btn.classList.remove('text-danger');
        console.log('Produit dé-aimé');
      }
    });
  });

  // Gestion du bouton "Supprimer"
  document.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.card');
      item.remove();
      console.log(' quantity supprimer');
      updateTotalPrice();
    });
  });
});
 