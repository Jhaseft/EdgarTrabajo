<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px; }
        .container { background: #fff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,.1); }
        h1 { color: #e3342f; }
        table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        th, td { padding: 10px; border-bottom: 1px solid #ddd; text-align: left; }
        th { background: #f1f1f1; }
        .total { font-size: 18px; font-weight: bold; color: #e3342f; text-align: right; }
        .footer { margin-top: 20px; font-size: 12px; color: #666; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <h1>¡Nuevo Pedido Recibido!</h1>
        <p>Se ha generado un nuevo pedido con los siguientes detalles:</p>

        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unit.</th>
                </tr>
            </thead>
            <tbody>
                @foreach($cart as $item)
                <tr>
                    <td>{{ $item['name'] }}</td>
                    <td>{{ $item['qty'] }}</td>
                    <td>{{ $item['price'] }} Bs</td>
                </tr>
                @endforeach
            </tbody>
        </table>

        <p class="total">Total: {{ $total }} Bs</p>

        <p><strong>📎 El comprobante de pago está adjunto en este correo.</strong></p>

        <div class="footer">
            <p>Este es un correo automático, por favor no respondas directamente.</p>
        </div>
    </div>
</body>
</html>
