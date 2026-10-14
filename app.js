const form = document.querySelector('#lead-form');
const fields = ['name', 'phone', 'type', 'place', 'capacity', 'channels'];
function message() {
  const values = Object.fromEntries(fields.map(key => [key, form.elements[key].value.trim() || '(a preencher)']));
  return `Olá, tenho interesse em apresentar minha hospedagem à Tripway!\n\nNome: ${values.name}\nTelefone: ${values.phone}\nTipo de hospedagem: ${values.type}\nLocal: ${values.place}\nCapacidade: ${values.capacity} pessoa(s)\nComo capto clientes / plataformas que utilizo: ${values.channels}`;
}
function update() {
  fields.forEach(key => form.elements[key].setCustomValidity(''));
  document.querySelector('#message').textContent = message();
  document.querySelector('#status').textContent = '';
}
form.addEventListener('input', update);
form.addEventListener('change', update);
form.addEventListener('submit', event => {
  event.preventDefault();
  fields.forEach(key => {
    const field = form.elements[key];
    field.setCustomValidity(field.value.trim() ? '' : 'Preencha este campo.');
  });
  const phone = form.elements.phone;
  const digits = phone.value.replace(/\D/g, '');
  const local = digits.startsWith('55') && digits.length > 11 ? digits.slice(2) : digits;
  if (!/^\d{10,11}$/.test(local)) phone.setCustomValidity('Informe um telefone com DDD (10 ou 11 dígitos).');
  const capacity = form.elements.capacity;
  if (!Number.isSafeInteger(Number(capacity.value)) || Number(capacity.value) < 1) capacity.setCustomValidity('Informe um número inteiro de pessoas, a partir de 1.');
  if (!form.reportValidity()) return;
  const url = 'https://wa.me/559391302594?text=' + encodeURIComponent(message());
  window.open(url, '_blank', 'noopener,noreferrer');
  const status = document.querySelector('#status');
  status.textContent = 'Confira e envie no WhatsApp. Se ele não abriu, ';
  const link = document.createElement('a');
  link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'toque aqui para continuar';
  status.append(link);
});
update();
