function myFunction() {
      const a = parseFloat(document.getElementById("a").value);
      const b = parseFloat(document.getElementById("b").value);
      const c = parseFloat(document.getElementById("c").value);
      const resultDiv = document.getElementById("result");

      
      if (a === 0) {
        resultDiv.innerHTML = "'a' cannot be 0 (not a quadratic equation).";
        return;
      }

      const discriminant = b * b - 4 * a * c;
      let resultText = `${discriminant}`;

      if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultText = `x₁ = ${root1.toFixed(3)}  x₂ = ${root2.toFixed(3)}`;
      } else if (discriminant === 0) {
        const root = -b / (2 * a);
        resultText = `x = ${root.toFixed(3)}`;
      } else {
        const realPart = (-b / (2 * a)).toFixed(3);
        const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(3);
        resultText = `x₁ = ${realPart} + ${imagPart}i    x₂ = ${realPart} - ${imagPart}i`;
      }

      resultDiv.innerHTML = resultText;
    }

